# * 베이스 이미지
FROM node:18

WORKDIR /app/client

COPY ../client .

RUN npm install

# 환경 변수 설정 (생략해도 무관)
ENV NODE_ENV=development

EXPOSE 3000

# * 실행 명령어
CMD ["npm", "run", "dev"]
