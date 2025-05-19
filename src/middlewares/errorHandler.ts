import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

export function errorHandler(
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
): Response {
  const isAppError = err instanceof AppError || "statusCode" in err;

  if (isAppError) {
    const typedError = err as AppError;

    console.error("⚠️ AppError:", {
      message: typedError.message,
      statusCode: typedError.statusCode,
      details: typedError.details ?? "Sem detalhes",
    });

    return res.status(typedError.statusCode).json({
      status: "error",
      statusCode: typedError.statusCode,
      message: typedError.message,
      details: typedError.details ?? null,
    });
  }

  console.error("🔥 Erro inesperado:", err);

  return res.status(500).json({
    status: "error",
    statusCode: 500,
    message: "Erro interno no servidor",
    details: err.message ?? null,
  });
}
