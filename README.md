# Kaizen Case

## Kurulum ve Çalıştırma

1. Dökümanı takip ederek Android ve iOS için React Native development environment kurulumunu yapınız. https://reactnative.dev/docs/environment-setup
1. Aşağıdaki komutu terminalde çalıştırarak yarn paket yöneticisini kurunuz.
   - `$ npm i -g yarn`
1. Terminalden proje dizinine gidiniz ve aşağıdaki komutu çalıştırarak proje için gerekli paketleri indiriniz.
   - `$ yarn`
1. Aynı dizinde aşağıdaki komutu çalıştırarak iOS için gerekli paketleri indiriniz.
   - `$ npx pod-install`
1. Paket kurumları tamamlandıktan sonra projeyi `$ yarn ios` komutu ile iOS simülatörde, `$ yarn android` komutu ile Android emülatörde çalıştırabilirsiniz.