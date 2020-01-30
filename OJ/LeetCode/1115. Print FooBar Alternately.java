import java.util.ArrayList;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

class FooBar {
	private int n;
	private BlockingQueue<Integer> foo;
	private BlockingQueue<Integer> bar;

	public FooBar(int n) {
		this.n  = n;
		bar = new LinkedBlockingQueue();
		foo = new LinkedBlockingQueue();
	}

	public void foo(Runnable printFoo) throws InterruptedException {

		for (int i = 0; i < n; i++) {
			if(i!=0){
				foo.take();
			}
			// printFoo.run() outputs "foo". Do not change or remove this line.
			printFoo.run();
			bar.put(i);
		}
	}

	public void bar(Runnable printBar) throws InterruptedException {

		for (int i = 0; i < n; i++) {
			bar.take();
			// printBar.run() outputs "bar". Do not change or remove this line.
			printBar.run();
			foo.put(i);
		}
	}
}
