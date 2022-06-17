use std::{fs::read_to_string, collections::HashMap};

fn most_common(chars: &HashMap<char, usize>) -> (char, usize) {
    let mut max_count = 0;
    let mut max_char = ' ';

    for (c, count) in chars.iter() {
        if *count > max_count {
            max_count = *count;
            max_char = *c;
        }
    }

    (max_char, max_count)
}

fn least_common(chars: &HashMap<char, usize>) -> (char, usize) {
    let mut min_count = std::usize::MAX;
    let mut min_char = ' ';

    for (c, count) in chars.iter() {
        if *count < min_count {
            min_count = *count;
            min_char = *c;
        }
    }

    (min_char, min_count)
}

fn main() {
    let file = read_to_string( "input.txt").unwrap();
    
    let mut rule_map: HashMap<String, char> = HashMap::new();
    let mut pair_counts: HashMap<String, usize> = HashMap::new();
    let mut char_counts: HashMap<char, usize> = HashMap::new();
    
    let blocks: Vec<&str> = file.split("\n\n").collect();

    for c in blocks[0].chars() {
        match char_counts.get_mut(&c) {
            Some(v) => *v += 1,
            None => {
                char_counts.insert(c, 1);
            },
        }
    }

    for i in 0..blocks[0].len() -1 {
        let pattern = blocks[0].get(i..=i+1).unwrap();

        match pair_counts.get_mut(pattern) {
            Some(v) => *v += 1,
            None => {
                pair_counts.insert(pattern.to_string(), 1);
            },
        }
    }

    for line in blocks[1].lines() {
        let r: Vec<&str> = line.split(" -> ").collect();

        rule_map.insert(r[0].to_string(), r[1].chars().next().unwrap());
    }

    for _ in 1..=40 {

        let mut new_pair_counts = pair_counts.clone();
        for (pair, count) in pair_counts.iter_mut() {

            if let Some(c) = rule_map.get(pair) {
                let pair1 = format!("{}{}", pair.get(0..=0).unwrap(), c);
                let pair2 = format!("{}{}", c, pair.get(1..=1).unwrap());

                // println!("{} -> {}, {}  {}x", pair, pair1, pair2, count);

                match char_counts.get_mut(c) {
                    Some(v) => *v += *count,
                    None => {
                        char_counts.insert(*c, *count);
                    },
                }

                match new_pair_counts.get_mut(pair) {
                    Some(v) => {
                        let i: isize = (*v - *count).try_into().unwrap();
                        if i <= 0 {
                            new_pair_counts.remove(pair);
                        } else {
                            *v = i as usize;
                        }
                    },
                    None => (),
                }

                match new_pair_counts.get_mut(&pair1) {
                    Some(v) => *v += *count,
                    None => {
                        new_pair_counts.insert(pair1, *count);
                    },
                }

                match new_pair_counts.get_mut(&pair2) {
                    Some(v) => *v += *count,
                    None => {
                        new_pair_counts.insert(pair2, *count);
                    },
                }
            }
        }
        pair_counts = new_pair_counts;

    }

    let (most_common, most_common_count) = most_common(&char_counts);
    let (least_common, least_common_count) = least_common(&char_counts);

    println!("Most common: {}: {}",most_common, most_common_count);
    println!("Least common: {}: {}", least_common, least_common_count);

    println!("Result: {}", most_common_count - least_common_count);
}
