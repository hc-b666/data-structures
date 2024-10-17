#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef vector<int> vi;
typedef vector<ll> vll;

#define PB push_back

void solve() {
  int n;
  cin >> n;

  ll ts = (n*(n+1))/2;

  if (ts % 2) {
    cout << "NO\n";  
  } else {
    cout << "YES\n";
    ll t = ts / 2;
    vll s1, s2;
    ll ss1 = 0, ss2 = 0;

    for (int i = n; i > 0; i--) {
      if (ss1 < ss2) {
        s1.PB(i);
        ss1+=i;
      } else {
        s2.PB(i);
        ss2+=i;
      }
    }

    cout << s1.size() << "\n";
    for (ll num : s1) {
      cout << num << " ";
    }

    cout << "\n";
  
    cout << s2.size() << "\n";
    for (ll num : s2) {
      cout << num << " ";
    }
  }

}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  solve();
  
  return 0;
}

// int total_sum = (n * (n + 1)) / 2;
