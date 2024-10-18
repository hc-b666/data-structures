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

    int l = 0;
    int r = a.size() - 1;
    bool found = false;

    while (l <= r) {
      int m = (l + r) / 2;

      if (a[m] == q) {
        cout << "YES\n";
        found = true;
        break;
      } else if (a[m] < q) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }

    if (!found) {
      cout << "NO\n";
    }
  }
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  solve();
  
  return 0;
}