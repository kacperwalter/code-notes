#include <stdio.h> // header file (like importing library)
#include <cs50.h>

int main(void) {
  int x = get_int("What's x? ");
  int y = get_int("What's y? ");

  if (x > y) {
    printf("X is greater than Y\n");
  } 
  else if (x < y) {
    printf("Y is greater than X\n");
  } 
  else {
    printf("X and Y are equal\n");
  }
}