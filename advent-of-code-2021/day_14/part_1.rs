use std::{fs::read_to_string, collections::HashMap};

fn do_steps(template: String, rules: &Vec<(&str, char)>, steps: usize) -> String {
    let mut result = template;

    for _ in 1..=steps {
        let mut new_template: String = String::new();

        for i in 0..result.len()-1 {
            let pattern = result.get(i..=i+1).unwrap();

            new_template.push(pattern.chars().next().unwrap());
            for rule in rules.iter() {
                if rule.0 == pattern {
                    new_template.push(rule.1);
                }
            }
        }

        new_template.push(result.chars().last().unwrap());

        result = new_template;
    }

    result
}

fn most_common_char(string: &str) -> (char, usize) {
    let mut counts = HashMap::new();

    for c in string.chars() {
        *counts.entry(c).or_insert(0) += 1;
    }

    let mut max_count: usize = 0;
    let mut max_char = ' ';

    for (c, count) in counts.iter() {
        if *count > max_count {
            max_count = *count;
            max_char = *c;
        }
    }

    (max_char, max_count)
}

fn least_common_char(string: &str) -> (char, usize) {
    let mut counts = HashMap::new();

    for c in string.chars() {
        *counts.entry(c).or_insert(0) += 1;
    }

    let mut min_count: usize = std::usize::MAX;
    let mut min_char = ' ';

    for (c, count) in counts.iter() {
        if *count < min_count {
            min_count = *count;
            min_char = *c;
        }
    }

    (min_char, min_count)
}

fn main() {
    let file = read_to_string( "input.txt").unwrap();
    
    let mut template: String = String::new();
    let mut rules: Vec<(&str, char)> = Vec::new();

    let blocks: Vec<&str> = file.split("\n\n").collect();
    template = blocks[0].to_string();

    for line in blocks[1].lines() {
        let r: Vec<&str> = line.split(" -> ").collect();

        rules.push((r[0], r[1].chars().next().unwrap()));
    }


    template = do_steps(template, &rules, 10);

    let (most_common, most_common_count) = most_common_char(&template);
    let (least_common, least_common_count) = least_common_char(&template);

    println!("Most common: {}: {}",most_common, most_common_count);
    println!("Least common: {}: {}", least_common, least_common_count);

    println!("Result: {}", most_common_count - least_common_count);
}
