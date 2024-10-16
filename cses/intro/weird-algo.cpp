#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  ll n;
  cin >> n;

  cout << n << " ";

  while (n != 1) {
    n = n % 2 == 0 ? n / 2 : n * 3 + 1;
    cout << n << " ";  
  }

  cout << "\n";

  return 0;
}
