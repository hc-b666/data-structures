#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int n;
  cin >> n;

  for (int i=1; i<=n; i++) {
    ll tp1 = i*i, tp2 = tp1*(tp1-1)/2;
    ll ap = 4*(i-1)*(i-2);
    cout << tp2-ap << "\n";
  }
  
  return 0;
}

// total pairs using combinatorics - ((k*k)*(k*k-1))/2

// ----- Counting attacking pairs ----- //

// 1. 2x3 and 3x2 blocks:
// Look at all the places where you can fit a 2x3 block on a k x k board.
// For every k x k board, there are (k-1)(k-2) ways to fit a 2x3 block.
// Similarly, there are (k-2)(k-1) ways to fit a 3x2 block.
// These two patterns are symmetric, so the total number of attacking pairs is the same for both block types.

// 2. Multiplying by 4:
// For each 2x3 or 3x2 block, there are exactly 2 knights that can attack each other. 
// Since the movement is symmetric, 
// the number of ways two knights can attack each other is multiplied by 4 (because of symmetry in the L-shape).

// 4*(i-1)*(i-2)