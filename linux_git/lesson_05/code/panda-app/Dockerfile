# + OS - Linux 
# + Node js - чтобы запустить js код
# + Нужна сама программа - index.js
# Нужна команда запускающая index.js - node index.js


# FROM - команда позволяющая описать какое у нас будет окружение
# node - это утсановка nodejs
# alpine - это дистрибутив Linux
FROM node:alpine
WORKDIR /app

# COPY - копирует файлы из вашей директории на PC в образ Docker
# ./ - откуда
# /app - куда, имя папки app мы придумалим сами
COPY ./ ./

# CMD <comand>  - запускает команду в терминале Linux Alpine
CMD node index.js
