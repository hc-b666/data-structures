#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef vector<int> vi;
typedef vector<ll> vll;

#define PB push_back

void solve() {
  ll a, b;
  cin >> a >> b;

  if ((a + b) % 3 == 0 && 2 * min(a, b) >= max(a, b)) cout << "YES\n";
  else cout << "NO\n";
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int n;
  cin >> n;

  while (n--) {
    solve();
  }
  
  return 0;
}
