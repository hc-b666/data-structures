#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef vector<int> vi;
typedef vector<ll> vll;

#define PB push_back

void solve() {
  int n, k;
  cin >> n >> k;

  vi a(n);

  for (int i = 0; i < n; ++i) {
    cin >> a[i];
  }

  while (k--) {
    int q;
    cin >> q;

    int l = -1;
    int r = a.size();

    while (r > l + 1) {
      int m = (l + r) / 2;

      if (a[m] <= q) l = m;
      else r = m;
    }

    cout << l + 1 << "\n";
  }
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  solve();
  
  return 0;
}
