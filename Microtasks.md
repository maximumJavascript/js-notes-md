# Микрозадачи
Обработчики промисов **.then** / **.catch**/**.finally** всегда асинхронны.
Даже когда промис сразу же выполнен, синхронный код будет выполнен раньше вызванных обработчиков.

## Очередь микрозадач
Очередь организуется по принципу учёта **FIFO** (first-in-first-out). Задачи, попавшие в очередь первыми, выполняются соответственно первыми.

Асинхронные задачи требуют правильного управления. Для этого стандарт предусматривает внутреннюю очередь `PromiseJobs`, более известную как «очередь микрозадач (microtask queue)» (термин V8).

Отсюда следует, что после выполнения промиса обработчики `then`, `catch` и `finally` попадают в эту очередь, но не выполняются. Далее каждая задача будет выполняться в порядке организованной FIFO-очереди.

## Необработанные ошибки
Необработанная ошибка является результатом того, что возникшая ошибка во время выполнения промиса не была обработана к концу очереди микрозадач.

Для отлавливания ошибок используется соответствующий обработчик `catch`, который позволяет обработать эту ошибку. В случае, если вызова обработчика в очереди микрозадач не будет - будет сгенерирует событие, уведомляющее нас об ошибке.