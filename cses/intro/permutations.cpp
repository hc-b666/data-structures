#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

void solve(int n) {

  for (int i = 2; i <= n; i += 2) {
    cout << i << " ";
  }

  for (int j = 1; j <= n; j += 2) {
    cout << j << " ";
  }

}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  ll n;
  cin >> n;

  if (n == 1) cout << 1 << "\n";
  else if (n == 2 || n == 3) cout << "NO SOLUTION\n";
  else solve(n);
  
  return 0;
}
