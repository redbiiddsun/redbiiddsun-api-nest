export type ReturnResponse<T> =
  | {
      statusCode: number;
      message?: string;
      data: T;
      error?: string;
    }
  | {
      data?: never;
      error: string;
    };
