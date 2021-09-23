import numpy as np

#! (A)
#& A + B

print("A + B\n")

add = np.add(A,B)
print(add)

print("_________________________________________________")
print("A x B\n")

cross = np.cross(A,B)

print(cross)


print("_________________________________________________")
print("Determinate of A\n")

determinate = np.linalg.det(A) 

print(determinate)



print("_________________________________________________")
print("Inverse of B\n")


inverse = np.linalg.inv(B)

print(inverse)


print("_________________________________________________")
print("Eigenvalues of A\n")


eigenvalue = np.linalg.eig(A)

print(eigenvalue)