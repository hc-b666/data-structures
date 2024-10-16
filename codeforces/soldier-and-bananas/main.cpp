#include <bits/stdc++.h>
using namespace std;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int k, n, w;
  cin >> k >> n >> w;

  for (int i = 1; i <= w; i++) {
    n -= (k * i);
  }

  int ans = n > 0 ? 0 : abs(n);
  
  cout << ans << "\n";

  return 0;
}
