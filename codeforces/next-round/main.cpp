#include <iostream>
#include <vector>
using namespace std;

int main() {
  int n, k;
  cin >> n >> k;  

  vector<int> scores(n);
  for (int i = 0; i < n; ++i) {
    cin >> scores[i];
  }

  int passed = 0;
  int lp = scores[k-1];

  for (int score : scores) {
    if (score > 0 && score >= lp) passed++;
  }

  cout << passed << endl;

  return 0;
}
