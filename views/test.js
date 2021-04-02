const matrix = () => {
    A = [[12, 7, 3],
        [4, 5, 6],
        [7, 8, 9]]
  
       
    B = [[5, 8, 1, 2],
        [6, 7, 3, 0],
        [4, 5, 9, 1]]
      
    result = [[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]]

    for (i = 0; i < A.length; i++) {
        for (j = 0; j < B[0].length; j++) {
            for (k = 0; k < B.length; k++) {
                result[i][j] += A[i][k] * B[k][j]
            }
        }
    }
    for (r = 0; r < result.length; r++) {
        console.log(result[r])
    }

    // console.log(result)
}

matrix()