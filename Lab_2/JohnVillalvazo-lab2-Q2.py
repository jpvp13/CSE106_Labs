import numpy as np
from numpy import linalg as LA

# given matrices from worksheet
A = np.array([[1,2,3],[4,5,6],[7,8,9]])
B = np.array([[3,1,4],[2,6,1],[2,9,7]])

print("\nGiven Matricies")

print("Matrix A:  ")
print(A , "\n")
print("Matrix B:  ")
print(B, "\n")

print("_________________________________________________")


#! (A)
#& A + B


print("## A + B ## \n")

add = np.add(A,B)
print(add)

print("_________________________________________________")
print("## A x B ##\n")

cross = np.cross(A,B)

print(cross)


print("_________________________________________________")
print("## Determinate of A ## \n")

determinate = LA.det(A) 

print(determinate)



print("_________________________________________________")
print("## Inverse of B ## \n")


inverse = LA.inv(B)

print(inverse)


print("_________________________________________________")
print("## Eigenvalues of A ##\n")


eigenvalue = LA.eig(A)

print(eigenvalue, "\n")