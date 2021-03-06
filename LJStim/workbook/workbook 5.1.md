## Оглавление
### Конспект
________________________
+ [Методы примитивов 5.1](obsidian://open?vault=StorageMDF&file=LJStim%2Fworkbook%2Fworkbook%205.1)
+ [Числа 5.2](obsidian://open?vault=StorageMDF&file=LJStim%2Fworkbook%2Fworkbook%205.2)
+ [Строки 5.3](obsidian://open?vault=StorageMDF&file=LJStim%2Fworkbook%2Fworkbook%205.3)
+ [Массивы 5.4](obsidian://open?vault=StorageMDF&file=LJStim%2Fworkbook%2Fworkbook%205.4)


### Заметки
+ [Числа 5.2](obsidian://open?vault=StorageMDF&file=LJStim%2Fnotes%2Fnote%205.2)
__________________________
## Методы примитивов
Эта заметка вступительная в главе "Типы данных", раскрывающая тему более детально. Хоть мы и ознакомились с типами данных JS в разделе "Основы", всё же более углубенное знакомство со всем инструментарием методов созданных для каждого типа необходимо для решения практических задач при работе с этими самыми типами, будь то: `string`, `number`, `boolean`, `symbol`, `null`, `undefined` и `bigint`.
Хотя стоит оговориться, что `null` и `undefined` не имеют своих методов.
Да-да, методов. Хоть мы говорим о примитивах, но всё же у них, как и у объектов есть свои методы.  Каждый примитив имеет свой "объект-обёртку".
Например метод типа `srtring` - [str.toUpperCase()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) 


![[workbook 5.1.1.jpg]]


Этот метод возвращает строку в верхнем регистре.

Что происходит "под капотом JS"? 
1.  Строка `str` – примитив. В момент обращения к его свойству, создаётся специальный объект, который знает значение строки и имеет такие полезные методы, как `toUpperCase()`.
2.  Этот метод запускается и возвращает новую строку (показывается в `alert`).
3.  Специальный объект удаляется, оставляя только примитив `str`.

Такая методика позволила создателям JS добиться лёгкости приммитивных типов данных в отличии от объектов, но в то же время существует возможность пользоваться методами как у объектов.

