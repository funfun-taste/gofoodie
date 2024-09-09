export const isProd = process.env.NODE_ENV === 'production';
export const LOCAL_DOCKER_RUN = process.env.DOCKER_RUN === 'docker';
export const PRODUCTION_HOST = process.env.NEXT_PUBLIC_PRODUCTION_API_URL  as string;
export const LOCAL_HOST = process.env.NEXT_PUBLIC_LOCAL_API_URL  as string;

export const BASE_URL = isProd ? PRODUCTION_HOST : LOCAL_HOST;

export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN as string;

/**
 * =========================
 * @description Next Auth 환경 변수
 * =========================
 */
export const NEXT_AUTH_SECRET_KEY =  process.env.NEXTAUTH_SECRET as string;

/**
 * =========================
 * @description 카카오 환경 변수
 * =========================
 */
export const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY as string;
export const KAKAO_REST_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_KEY as string;
export const NEXT_AUTH_KAKAO_CLIENT_ID =  process.env.KAKAO_CLIENT_ID as string;
export const NEXT_AUTH_KAKAO_SECRET_KEY = process.env.KAKAO_CLIENT_SECRET as string;