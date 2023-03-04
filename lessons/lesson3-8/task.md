# Crowd fund

Пользователь создает компанию по сбору средств для проекта.
Другие Пользователи могут делать взносы для разных компаний, переводя свой эфир в компанию.
После завершения компании создатель компании может потребовать средства, если общая сумма взносов превышает цель компании.
В противном случае компания не достигла своей цели, пользователи могут отозвать свое пожертвование. 


Используйте следующие эвенты для соответсвтующих методов. 
```
event Launch(
        uint id,
        address indexed creator,
        uint goal,
        uint32 startAt,
        uint32 endAt
    );
    event Cancel(uint id);
    event Pledge(uint indexed id, address indexed caller, uint amount);
    event Unpledge(uint indexed id, address indexed caller, uint amount);
    event Claim(uint id);
    event Refund(uint id, address indexed caller, uint amount);
```

```shell
npx hardhat test
```

Код проекта находится [здесь](https://github.com/dAppAdventure/dAppAdventure.github.io/tree/main/lessons/lesson3-8/crowd-fund)
