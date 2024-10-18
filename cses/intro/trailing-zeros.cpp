#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef vector<int> vi;
typedef vector<ll> vll;

#define PB push_back

void solve() {
  ll n;
  cin >> n;
  ll z = 0;
  for (ll i = 5; i <= n; i *= 5) {
    z += n / i;
  }
  cout << z << "\n";
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  solve();
  
  return 0;
}
