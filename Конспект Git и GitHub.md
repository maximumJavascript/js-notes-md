### Основные команды гита

- git init – инициализация проекта
- git config --local(global) user.name user.name “Ivan”
- git config --local(global) user.email email@mail.ru – информация о прогере 
- git status – статус гита 
- git add -A (или названия файла) – все добавить файлы 
- git commit -a –m ”commit” – коммит 
- git log – посмотреть историю коммитов 
- git remote add origin https://github.com/ссылка на репозиторий - добавить репозиторий (origin) гитхаба 
- git push -u origin master – запушить файлы в репозиторий (origin) 
- git push – запушить файлы в репозиторий, который мы выбрали командой выше 
- git remote set-url origin “url” – изменить репу 
- git remote remove origin – удалить привязку к репу
origin — имя по умолчанию, которое Git даёт серверу, с которого производилось клонирование.
___

### Работа с разных устроиств
- Для начала зайти в нужную папку
- git clone https://github.com/ссылка на репозиторий НазваниеПапки - клонирование репозитория в локальную папку
- git pull – установка самой свежей версии кода из репозитория

[[Symbol]]
