import { useState } from "react";

type ConfigType = {
  credentials?: RequestCredentials;
  [key: string]: any;
};
type ResponseType = "JSON" | "TEXT";

type errorCode = {
  errorCode: number;
  errorMessage: string;
};

const useGet = <T,>(
  url: string,
  responseType: ResponseType = "JSON",
  config: ConfigType = { credentials: "include" }
) => {
  const [response, setResponse] = useState<T | errorCode | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendGetRequest = async (queryParams: Record<string, string> = {}) => {
    const requestURL =
      "elcoo.de:8080" +
      url +
      (Object.keys(queryParams).length > 0
        ? `?${new URLSearchParams(queryParams)}`
        : "");
    setIsLoading(true);
    const res = await fetch(requestURL, config);

    let data;
    if (!res.ok)
      data = {
        errorCode: res.status,
        errorMessage: res.statusText,
      } as errorCode;
    else if (responseType == "JSON") data = (await res.json()) as T;
    else data = (await res.text()) as T;

    setResponse(data);
    setIsLoading(false);
  };

  return [response, isLoading, sendGetRequest] as const;
};

const usePost = <T,>(
  url: string,
  responseType: ResponseType = "JSON",
  config: ConfigType = { credentials: "include" }
) => {
  const [response, setResponse] = useState<T | errorCode | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendPostRequest = async (
    body: any,
    queryParams: Record<string, string> = {}
  ) => {
    const requestURL =
      "http://elcoo.de:8080/api/v1" +
      url +
      (Object.keys(queryParams).length > 0
        ? `?${new URLSearchParams(queryParams)}`
        : "");

    setIsLoading(true);
    const fullConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      ...config,
    };

    const res = await fetch(requestURL, {
      ...fullConfig,
      body:
        fullConfig.headers["Content-Type"] == "application/json"
          ? JSON.stringify(body)
          : body,
    });

    let data;
    if (!res.ok)
      data = {
        errorCode: res.status,
        errorMessage: res.statusText,
      } as errorCode;
    else if (responseType == "JSON") data = (await res.json()) as T;
    else data = (await res.text()) as T;

    setResponse(data);
    setIsLoading(false);
  };

  return [response, isLoading, sendPostRequest] as const;
};

export { useGet, usePost };
export type { errorCode };
