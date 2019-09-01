class Singleton
{
  constructor()
  {
    const instance = this.constructor.instance;
    if (instance)
    {
      return instance;
    }
    this.constructor.instance = this;
  }
}
