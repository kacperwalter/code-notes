#include <stdio.h> // header file (like importing library)
#include <cs50.h>

int main(void) {
  string firstQuestion = get_string("What's your name? ");
  string secondQuestion = get_string("What's your surname? ");
  printf("Hello, %s %s\n", firstQuestion, secondQuestion);

  return 0;
}