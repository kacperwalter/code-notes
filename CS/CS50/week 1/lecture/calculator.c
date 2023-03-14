#include <stdio.h>
#include <cs50.h>

int main(void) {
  long x = get_long("X: ");
  long y = get_long("Y: ");

  double z = (double) x / (double) y;
  printf("%f\n", x + y);
}