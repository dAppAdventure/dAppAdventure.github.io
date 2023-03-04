# Advanced lock

Пользователь заводит средства в эфире и указывает массив адресов,
которые могут снять эти средства с его адреса, 
если в течении unlockTimeGap секунд не будет вызван метод ping, 
то средства будут доступны для снятия любому из адресов в массиве.
Если в течении unlockTimeGap будет вызван метод ping, то блокировка будет увеличена на unlockTimeGap
Пользователь из массива авторизованных адресов может вызвать метод withdraw и указать адрес, с которого он хочет снять средства. Если адрес указан верно, и время блокировки вышло то средства будут переведены на адрес пользователя

Используйте следующие эвенты для соответствующих методов.
```
    event Lock(address indexed owner, address[] authorized, uint amount);
    event Withdrawal(address authorized, uint amount);
    event Ping(address indexed owner, uint32 time);
```

```shell
npx hardhat --network hardhat test
```

Код проекта находится [здесь](https://github.com/dAppAdventure/dAppAdventure.github.io/tree/main/lessons/lesson3-7/advanced-lock)
