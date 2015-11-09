/* Инвертируем отражаем 1 в 0 и наоборот( 0 в 1) */
int flip(int bit){
  return 1^bit;
}

/* Возвращаем 1, если число положительное, и 0, если отрицательное  */
int sign(int a){
  return flip((a >> 31) & 0x1);
}

/*ограничение в INT_MAX при a=INT_MAX - 2 b = -15 -> получаем переполнение*/
int getMaxValue(int a, int b){
  int k = sign(a - b);
  /*  q будет инвертированное значение k */
  int q = flip(k);
  return a * k + b * q;
}
