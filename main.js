let addBooks =
[
    [1, "Start with why",     "Simon Sinek ",         80.0 , 13 ],
    [2, "But how do it know	", "J. Clark Scott ",      59.9 ,  22 ],
    [3, "Clean Code	",         "Robert Cecil Martin ", 50.0 ,  5 ],
    [4, "Zero to One ",       "Peter Thiel ",       45.0 , 12 ],
    [5, "You don't know JS ", "Kyle Simpson ", 39.9 , 9 ]
];

for (let index1 = 0; index1 < addBooks.length; index1++) {

    for (let index2 = 0; index2 < addBooks.length; index2++) {
        
        if (index2 >= 3) {
            continue;
        }

        console.log(addBooks[index1][index2]);        
    }

    console.log("--------------------");

}

