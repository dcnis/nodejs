declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    MYSQL_URL: string;
    MYSQL_USER: string;
    MYSQL_ROOT_PASSWORD: string;
    MYSQL_DB: string;
    REDIS_PASSWORD: string;
    JWT_SECRET: string;
    PACKAGEJSON_SCRIPT_COMMAND: string;
    LOG_LEVEL: string;
    TIMEZONE: string;
  }
}
