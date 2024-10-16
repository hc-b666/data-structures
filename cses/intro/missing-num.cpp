#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  ll n;
  cin >> n;

  ll ts = (n * (n + 1)) / 2;

  while (--n) {
    ll num;
    cin >> num;
    ts -= num;
  }

  cout << ts << "\n";

  return 0;
}
