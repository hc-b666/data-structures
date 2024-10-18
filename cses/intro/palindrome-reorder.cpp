#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef vector<int> vi;
typedef vector<ll> vll;

#define PB push_back

void solve() {
  string str;
  cin >> str;

  unordered_map<char, int> m;

  for (char ch : str) {
    m[ch]++;
  }

  string lp = "";
  string md = "";

  for (auto& entry : m) {
    char ch = entry.first;
    int f = entry.second;

    if (f % 2 == 1) {
      if (!md.empty()) {
        cout << "NO SOLUTION";
        return;
      }
      md = ch;
    }

    lp.append(f / 2, ch);
  }

  string rp = lp;
  reverse(rp.begin(), rp.end());

  cout << lp + md + rp << "\n";
}

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  solve();
  
  return 0;
}
