interface BSResponse {
    list: number[];
    item: number;
    index: number | string;
    number_of_tries: number;
    complexity: string;
}

// O(log n)
function binarySeach(list: number[], item: number): BSResponse {
    let low = 0;
    const len = list.length;
    let high = len - 1;
    let number_of_tries = 1;
    const complexity = `O(log n)    log2(${len}) = ${Math.log2(len)}`;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        console.log(mid);
        const guess = list[mid];
        if (guess === item) {
            return {
                list,
                item,
                index: mid,
                number_of_tries,
                complexity,
            };
        }
        if (guess > item) {
            high = mid - 1;
        } else if (guess < item) {
            low = mid + 1;
        }
        number_of_tries += 1;
    }

    return {
        list,
        item,
        index: "not found",
        number_of_tries,
        complexity,
    };
}

console.log(binarySeach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
