public class CircularQueue<T> {
  private T[] data;
  private int head;
  private int tail;
  private int size;

  // Constructor
  @SuppressWarnings("unchecked")
  public CircularQueue(int size) {
    this.data = (T[]) new Object[size];
    this.head = -1;
    this.tail = -1;
    this.size = size;
  }

  // Add new element to the tail
  public boolean enQueue(T value) {
    if (isFull()) {
      return false;
    }

    if (isEmpty()) {
      head = 0;
    }

    tail = (tail + 1) % size;
    data[tail] = value;
    return true;
  }

  // Remove element from the head
  public boolean deQueue() {
    if (isEmpty()) {
      return false;
    }

    if (head == tail) {
      head = -1;
      tail = -1;
      return true;
    }

    head = (head + 1) % size;
    return true;
  }

  // Get front element
  public T Front() {
    if (isEmpty()) {
      return null;
    }

    return data[head];
  }

  // Get last element
  public T Rear() {
    if (isEmpty()) {
      return null;
    }

    return data[tail];
  }

  // Checks if queue is empty
  public boolean isEmpty() {
    return head == -1;
  }

  // Checks if queue is full
  public boolean isFull() {
    return ((tail + 1) % size) == head;
  }
}
