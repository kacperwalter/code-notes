#include <stdio.h>
#include <cs50.h>

int get_size(void);
void print_grid(int size);
const char * return_string(void);

int main(void) {
  int n = get_size();
  print_grid(n);
  return_string();
}

int get_size(void) {
  int size;
  do {
    size = get_int("Size: ");
  }
  while (size < 1);

  return size;
}

void print_grid(int size) {
  for (int i = 0; i < size; i++) {
    for (int j = 0; j < size; j++) {
      printf("#");
    }
    printf("\n");
  }
}

const char * return_string(void) {
  char some_string[] = "Hello, World!";
  return some_string;
}
