use std::fs::File;
use std::io::{self, BufRead};
use std::path::Path;
use std::io::{stdin, stdout, Read, Write};
use std::time::{Instant};

fn main() {
  let start = Instant::now();
  let mut counter = 0;
    // File hosts must exist in current path before this produces output
    if let Ok(lines) = read_lines("./enwik9") {
        // Consumes the iterator, returns an (Optional) String
        for _line in lines {
                counter = counter + 1;            
        }
        println!("{}",counter)
      }
      let duration = start.elapsed();
      println!("Time elapsed in expensive_function() is: {:?}", duration);
      pause()
}


fn read_lines<P>(filename: P) -> io::Result<io::Lines<io::BufReader<File>>>
where P: AsRef<Path>, {
    let file = File::open(filename)?;
    Ok(io::BufReader::new(file).lines())
}

fn pause() {
  let mut stdout = stdout();
  stdout.write(b"Press Enter to continue...").unwrap();
  stdout.flush().unwrap();
  stdin().read(&mut [0]).unwrap();
}