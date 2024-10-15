#include <bits/stdc++.h>
using namespace std;

// tc = totalCards
// p = pyramids
// c = cards
// h = height

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int n;
  cin >> n;

  while (n--) {
    int tc;
    cin >> tc;
    int p = 0;

    while (tc >= 2) {
      int c = 0, h = 0;

      while ((c + (3 * h + 2)) <= tc) {
        c += 3 * h + 2;
        h++;
      }

      tc -= c;
      p++;
    }

    cout << p << "\n";
  }

  return 0;
}
