Домашнее задание к занятию «1.2. Система типов TypeScript. Принципы ООП. SOLID»

Подготовьте рабочую среду для дальнейшей работы.
1. Напишите интерфейс к сущности «книга» к разрабатываемому приложению «библиотека» из модуля NDSE «Настройка окружения и Express.js». На протяжении нескольких занятий мы будем поэтапно переписывать наш проект на TypeScript. Целью этого задания является только создание интерфейса без переписывания логики существующего приложения.
2. Включите строгий режим strict в опциях компилятора, а параметр strictNullChecks выключите.
Что вы должны увидеть после выполнения шага:
3. Напишите астрактный class BooksRepository к разрабатываемому приложению «библиотека» первого модуля. Сейчас мы его не будем применять, сейчас мы только напишем свой первый астрактный класс
Методы, которые должны быть в BooksRepository:
createBook(book){} — создание книги.
getBook(id){} — получение книги по id.
getBooks(){} — получение всех книг.
updateBook(id){} — обновление книги.
deleteBook(id){} — удаление книги.
