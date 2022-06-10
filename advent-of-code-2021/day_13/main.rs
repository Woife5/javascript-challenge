use std::fs;

fn biggest_numbers(numbers: &Vec<(usize, usize)>) -> (usize, usize) {
    let mut biggest_x = 0;
    let mut biggest_y = 0;
    for (x, y) in numbers {
        if *x > biggest_x {
            biggest_x = *x;
        }
        if *y > biggest_y {
            biggest_y = *y;
        }
    }
    (biggest_x, biggest_y)
}

fn print_grid(grid: &Vec<Vec<bool>>) {
    for row in grid {
        for c in row {
            if *c {
                print!("#");
            } else {
                print!(".");
            }
        }
        println!();
    }
}

fn fold_grid_x(grid: Vec<Vec<bool>>, x: usize) -> Vec<Vec<bool>> {
    let mut new_grid = vec![vec![false; x]; grid.len()];

    for (y, row) in grid.iter().enumerate() {
        for (x2, c) in row.iter().enumerate() {
            if *c {
                if x2 > x {
                    new_grid[y][x - (x2 - x)] = true;
                } else {
                    new_grid[y][x2] = true;
                }
            }
        }
    }

    new_grid
}

fn fold_grid_y(grid: Vec<Vec<bool>>, y: usize) -> Vec<Vec<bool>> {
    let mut new_grid = vec![vec![false; grid[0].len()]; y];

    for (y2, row) in grid.iter().enumerate() {
        for (x, c) in row.iter().enumerate() {
            if *c {
                if y2 >= y {
                    new_grid[y - (y2 - y)][x] = true;
                } else {
                    new_grid[y2][x] = true;
                }
            }
        }
    }

    new_grid
}

fn count_occupied(grid: &Vec<Vec<bool>>) -> usize {
    let mut count = 0;
    for row in grid {
        for c in row {
            if *c {
                count += 1;
            }
        }
    }

    count
}

fn main() {
    let file = fs::read_to_string( "input.txt").unwrap();
    let mut read_done = false;
    
    let mut folds: Vec<(char, usize)> = Vec::new();
    let mut dots: Vec<(usize, usize)> = Vec::new();

    let lines: Vec<&str> = file.lines().collect();

    for line in lines {
        if line == "" {
            read_done = true;
            continue;
        }

        if read_done {
            let mut f: Vec<&str> = line.split(" ").collect();

            f = f[2].split("=").collect();

            folds.push((f[0].chars().next().unwrap(), f[1].parse::<usize>().unwrap()));
        } else {
            let numbers: Vec<usize> = line.split(",").map(|x| x.parse::<usize>().unwrap()).collect();
            dots.push((numbers[0], numbers[1]));
        }
    }

    let (biggest_x, biggest_y) = biggest_numbers(&dots);

    let mut grid: Vec<Vec<bool>> = vec![vec![false; biggest_x + 1]; biggest_y + 1];

    for (x, y) in dots {
        grid[y][x] = true;
    }

    // print_grid(&grid);

    for fold in folds {
        match fold.0 {
            'x' => {
                grid = fold_grid_x(grid, fold.1);
            },
            'y' => {
                grid = fold_grid_y(grid, fold.1);
            },
            _ => {
                println!("Unknown fold: {}-{}", fold.0, fold.1);
            }
        }

        // println!();
        // print_grid(&grid);
    }
    
    print_grid(&grid);
    println!("Occupied: {}", count_occupied(&grid));
}
