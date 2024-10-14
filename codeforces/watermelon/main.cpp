#include <iostream>

using std::cout;
using std::cin;
using std::endl;

int main() {
  int w;
  cin>>w;

  if (w > 2 && w % 2 == 0) cout << "YES" << endl;
  else cout << "NO" << endl;

  return 0;
}

