#include <stdio.h>
#include <stdlib.h>

#define MAX_ELVES 1000

int main()
{
    FILE* ptr;

    ptr = fopen("input.txt", "r");

    if (ptr == NULL) {
        printf("File not found!");
        return 1;
    }

    int elve_sums[MAX_ELVES] = { 0 };
    int elve_num = 0;
    
    char line[100];
    do 
    {
        fgets(line, 100, ptr);
        if (*line == '\n')
        {
            elve_num++;
        }
        else
        {
            elve_sums[elve_num] += atoi(line);
        }
    }
    while(!feof(ptr));

    int max = 0;
    for (int i = 0; i < MAX_ELVES; i++)
    {
        if (elve_sums[i] > max)
        {
            max = elve_sums[i];
        }
    }

    printf("Max: %d", max);

    fclose(ptr);
    return 0;
}