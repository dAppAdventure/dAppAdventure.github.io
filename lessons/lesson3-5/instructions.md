# Подготовка среды для разработки и тестирования

### Установка Visual Studio Code
Перейдите по [ссылке](https://code.visualstudio.com/) и скачайте Visual Studio Code.

### Поставьте NodeJs.

#### Для Ubuntu выполните набор команд:
```
sudo apt update
sudo apt install curl git
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Для MacOs: (убедитесь что у вас установлен git):
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install 18
nvm use 18
nvm alias default 18
npm install npm --global # Upgrade npm to the latest version
```

#### Для Windows: скачайте и запустите [установщик](https://nodejs.org/en/download/)