#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef vector<int> vi;
typedef vector<ll> vll;

#define PB push_back

void solve() {
  ll y, x;
  cin >> y >> x;

  if (x == y) {
    cout << (x*x) - x + 1 << "\n";
  } 
  
  else {
    if (y > x) {

      if (y % 2 == 0) cout << y*y-(x-1) << "\n";
      else cout << (y-1)*(y-1)+(x-1)+1 << "\n"; 
    
    } else {
    
      if (x % 2 == 1) cout << x*x-(y-1) << "\n";
      else cout << (x-1)*(x-1)+(y-1)+1 << "\n"; 
    
    }
  }
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int t;
  cin >> t;

  while (t--) {
    solve();
  }
  
  return 0;
}
