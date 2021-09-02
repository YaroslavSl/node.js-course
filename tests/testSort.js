function sort1(A) {       // A - массив, который нужно
    var n = A.length;
    for (var i = 0; i < n-1; i++) {
        for (var j = 0; j < n-1-i; j++) {
            if (A[j+1] < A[j]) {
                var t = A[j+1];
                A[j+1] = A[j];
                A[j] = t;
            }
        }
     }                     
    return A;    // На выходе сортированный по возрастанию массив A.
}

function sort2(A) {      // A - массив, который нужно
    var n = A.length;
    for (var i = 0; i < n-1; i++) {
        var min = i;
        for (var j = i+1; j < n; j++) {
            if (A[j] < A[min]) min = j;
        } 
        var t = A[min]; A[min] = A[ i ]; A[ i ] = t;
    }                    
    return A;    // На выходе сортированный по возрастанию массив A.
}

function sort3(A) {     // A - массив, который нужно
    var n = A.length;
    for (var i = 0; i < n; i++) {
        var v = A[ i ], j = i-1;
        while (j >= 0 && A[j] > v) {
            A[j+1] = A[j]; j--;
        }
        A[j+1] = v;
    }                    
    return A;    // На выходе сортированный по возрастанию массив A.
}

function sort4(A) {
    var n = A.length, Count = [], B = [];
    for (var i = 0; i < n; i++) Count[ i ] = 0;
    for (var i = 0; i < n-1; i++) {
        for (var j = i+1; j < n; j++) {
            if (A[ i ] < A[j]) Count[j]++;
            else Count[ i ]++;
        }
     }
    for (var i = 0; i < n; i++) B[Count[ i ]] = A[ i ];
    return B;
}

console.log(sort1([5, 4, 6,0,4,2,3,9]));

// http://mathhelpplanet.com/static.php?p=javascript-algoritmy-sortirovki