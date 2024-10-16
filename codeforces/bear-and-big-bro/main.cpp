#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int a, b;
  int n = 0;
  cin >> a >> b;

  while (!(a > b)) {
    a *= 3; b *= 2; n++;
  }

  cout << n << "\n";

  return 0;
}
