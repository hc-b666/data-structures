#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  ll n;
  cin >> n;

  ll moves = 0;
  ll prev;
  cin >> prev;

  while (--n) {
    ll curr;
    cin >> curr;
    
    if (curr < prev) moves += prev - curr;
    else prev = curr;
  }

  cout << moves << "\n";
  
  return 0;
}
