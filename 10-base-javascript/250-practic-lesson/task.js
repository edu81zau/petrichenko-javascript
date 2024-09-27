/*
1) Функция isOpen не хочет правильно работать. 
Что мы уже не пробовали подставлять в неё - результат все время неправильный. 
Необходимо найти причины и исправить.

2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, 
складывать их и сравнивать с средним чеком (averageLunchPrice).

Сейчас функция работает, но постоянно выдает неправильный результат.
Ведь из представленного меню сумма двух любых цен всегда будет больше 20.
Необходимо найти причину и исправить.

3) Функция transferWaitors создана для того, чтобы копировать шаблон данных и 
передавать их в другой ресторан. Конечно, в другом ресторане будут другие блюда, 
другие официанты и тп. Сейчас эта функция только в начале разработки и должна
менять данные про официантов.

Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит 
новых официантов, но и основные данные! В restorantData сотрудник Alice исчезает и 
заменяется Mike! Необходимо найти причину и немедленно исправить, 
чтобы данные были разделены.
*/
